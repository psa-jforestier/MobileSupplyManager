// Mobile Supply Manager - Storage Module
// All data is stored in browser localStorage

const STORAGE_KEY = 'mobileSupplyManager';

// Initialize storage with default structure
function initStorage() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        // Detect browser language
        let browserLang = 'EN';
        if (navigator.languages && navigator.languages.length > 0) {
            const lang = navigator.languages[0].substring(0, 2).toUpperCase();
            if (lang === 'FR') browserLang = 'FR';
        }
        
        const initialData = {
            items: [],
            purchases: [],
            consumptions: [],
            settings: {
                currency: '€',
                language: browserLang,
                colorScheme: 'system'
            }
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    }
}

// Get all data from storage
function getData() {
    initStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// Save all data to storage
function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ===== ITEMS =====

function getAllItems() {
    return getData().items;
}

function getItem(itemName) {
    const data = getData();
    return data.items.find(item => item.name === itemName);
}

function addItem(name, color = '#fff') {
    const data = getData();
    
    if (data.items.find(item => item.name === name)) {
        return { success: false, message: 'Item already exists' };
    }
    
    data.items.push({
        name: name,
        color: color,
        createdAt: new Date().toISOString()
    });
    
    saveData(data);
    return { success: true };
}

function renameItem(oldName, newName) {
    const data = getData();
    
    if (oldName === newName) {
        return { success: true };
    }
    
    if (data.items.find(item => item.name === newName)) {
        return { success: false, message: 'An item with this name already exists' };
    }
    
    const item = data.items.find(item => item.name === oldName);
    if (!item) {
        return { success: false, message: 'Item not found' };
    }
    
    // Update item name
    item.name = newName;
    
    // Update all purchases and consumptions
    data.purchases.forEach(p => {
        if (p.itemName === oldName) p.itemName = newName;
    });
    data.consumptions.forEach(c => {
        if (c.itemName === oldName) c.itemName = newName;
    });
    
    saveData(data);
    return { success: true };
}

function changeItemColor(itemName, newColor) {
    const data = getData();
    
    const item = data.items.find(item => item.name === itemName);
    if (!item) {
        return { success: false, message: 'Item not found' };
    }
    
    item.color = newColor;
    saveData(data);
    return { success: true };
}

function deleteItem(itemName) {
    const data = getData();
    
    // Remove item
    data.items = data.items.filter(item => item.name !== itemName);
    
    // Remove all purchases and consumptions for this item
    data.purchases = data.purchases.filter(p => p.itemName !== itemName);
    data.consumptions = data.consumptions.filter(c => c.itemName !== itemName);
    
    saveData(data);
    return { success: true };
}

// ===== PURCHASES =====

function addPurchase(itemName, quantity, pricePerItem, datetime, storeName = '') {
    const data = getData();
    
    const purchase = {
        id: Date.now() + Math.random(),
        itemName: itemName,
        quantity: parseInt(quantity),
        pricePerItem: parseFloat(pricePerItem),
        totalPrice: parseInt(quantity) * parseFloat(pricePerItem),
        datetime: datetime,
        storeName: storeName,
        createdAt: new Date().toISOString()
    };
    
    data.purchases.push(purchase);
    saveData(data);
    return { success: true };
}

function getPurchasesForItem(itemName) {
    const data = getData();
    return data.purchases
        .filter(p => p.itemName === itemName)
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
}

function getLastPurchaseInfo(itemName) {
    const purchases = getPurchasesForItem(itemName);
    if (purchases.length === 0) return null;
    
    return {
        pricePerItem: purchases[0].pricePerItem,
        storeName: purchases[0].storeName
    };
}

// ===== CONSUMPTIONS =====

function addConsumption(itemName, quantity, pricePerItem, datetime, storeName = '') {
    const data = getData();
    
    const consumption = {
        id: Date.now() + Math.random(),
        itemName: itemName,
        quantity: parseInt(quantity),
        pricePerItem: parseFloat(pricePerItem),
        totalPrice: parseInt(quantity) * parseFloat(pricePerItem),
        datetime: datetime,
        storeName: storeName,
        createdAt: new Date().toISOString()
    };
    
    data.consumptions.push(consumption);
    saveData(data);
    return { success: true };
}

function getConsumptionsForItem(itemName) {
    const data = getData();
    return data.consumptions
        .filter(c => c.itemName === itemName)
        .sort((a, b) => new Date(b.datetime || b.date) - new Date(a.datetime || a.date));
}

// ===== STOCK CALCULATIONS =====

function getStock(itemName) {
    const data = getData();
    
    const purchases = data.purchases.filter(p => p.itemName === itemName);
    const consumptions = data.consumptions.filter(c => c.itemName === itemName);
    
    const totalPurchased = purchases.reduce((sum, p) => sum + p.quantity, 0);
    const totalConsumed = consumptions.reduce((sum, c) => sum + c.quantity, 0);
    const currentStock = totalPurchased - totalConsumed;
    
    // Calculate stock by price using FIFO method
    const stockByPrice = {};
    
    // Add all purchases sorted by datetime (oldest first)
    const sortedPurchases = [...purchases].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    sortedPurchases.forEach(purchase => {
        const key = `${purchase.pricePerItem}_${purchase.storeName || 'nostore'}`;
        if (!stockByPrice[key]) {
            stockByPrice[key] = {
                pricePerItem: purchase.pricePerItem,
                storeName: purchase.storeName,
                quantity: 0,
                date: purchase.datetime
            };
        }
        stockByPrice[key].quantity += purchase.quantity;
    });
    
    // Remove consumptions using FIFO
    const sortedConsumptions = [...consumptions].sort((a, b) => new Date(a.datetime || a.date) - new Date(b.datetime || b.date));
    sortedConsumptions.forEach(consumption => {
        let remainingToConsume = consumption.quantity;
        
        // Get all stock entries sorted by date (oldest first)
        const sortedKeys = Object.keys(stockByPrice).sort((a, b) => {
            return new Date(stockByPrice[a].date) - new Date(stockByPrice[b].date);
        });
        
        for (const key of sortedKeys) {
            if (remainingToConsume <= 0) break;
            
            const available = stockByPrice[key].quantity;
            const toConsume = Math.min(available, remainingToConsume);
            
            stockByPrice[key].quantity -= toConsume;
            remainingToConsume -= toConsume;
            
            if (stockByPrice[key].quantity === 0) {
                delete stockByPrice[key];
            }
        }
    });
    
    // Convert to array and sort by price
    const stockArray = Object.values(stockByPrice)
        .filter(s => s.quantity > 0)
        .sort((a, b) => a.pricePerItem - b.pricePerItem);
    
    // Calculate total value and average price
    const totalValue = stockArray.reduce((sum, s) => sum + (s.quantity * s.pricePerItem), 0);
    const averagePrice = currentStock > 0 ? totalValue / currentStock : 0;
    
    return {
        itemName: itemName,
        totalQuantity: currentStock,
        totalValue: totalValue,
        averagePrice: averagePrice,
        stockByPrice: stockArray
    };
}

// Check if there are enough items at a specific price
function canConsumeAtPrice(itemName, quantity, pricePerItem) {
    const stock = getStock(itemName);
    const priceStock = stock.stockByPrice.find(s => s.pricePerItem === pricePerItem);
    
    if (!priceStock) {
        return { success: false, errorType: 'noItemsAtPrice' };
    }
    
    if (priceStock.quantity < quantity) {
        return { success: false, errorType: 'notEnoughAtPrice', available: priceStock.quantity };
    }
    
    return { success: true };
}

// ===== HISTORY =====

function getHistory(itemName) {
    const data = getData();
    
    const purchases = data.purchases
        .filter(p => p.itemName === itemName)
        .map(p => ({
            ...p,
            action: 'Purchase',
            displayDate: p.datetime,
            sortDate: new Date(p.datetime)
        }));
    
    const consumptions = data.consumptions
        .filter(c => c.itemName === itemName)
        .map(c => ({
            ...c,
            action: 'Consume',
            displayDate: c.datetime || c.date,
            sortDate: new Date(c.datetime || c.date)
        }));
    
    return [...purchases, ...consumptions]
        .sort((a, b) => b.sortDate - a.sortDate);
}

// ===== SETTINGS =====

function getSettings() {
    return getData().settings;
}

function updateSettings(newSettings) {
    const data = getData();
    data.settings = { ...data.settings, ...newSettings };
    saveData(data);
    return { success: true };
}

function applyColorScheme() {
    const settings = getSettings();
    
    if (settings.colorScheme === 'dark') {
        document.body.classList.add('dark');
    } else if (settings.colorScheme === 'light') {
        document.body.classList.remove('dark');
    } else { // system
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
}

// ===== IMPORT/EXPORT =====

function exportData() {
    const data = getData();
    return JSON.stringify(data, null, 2);
}

function importData(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        
        // Validate structure
        if (!data.items || !data.purchases || !data.consumptions || !data.settings) {
            return { success: false, message: 'Invalid data format' };
        }
        
        // Clear existing data and import new data
        localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(STORAGE_KEY, jsonString);
        
        return { success: true };
    } catch (e) {
        return { success: false, message: 'Invalid JSON: ' + e.message };
    }
}

function clearAllData() {
    localStorage.removeItem(STORAGE_KEY);
    initStorage();
    return { success: true };
}

// Initialize storage on load
initStorage();
