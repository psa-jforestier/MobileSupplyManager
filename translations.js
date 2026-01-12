// Translation system for Mobile Supply Manager

const translations = {
    EN: {
        // Header
        appTitle: 'Mobile Supply Manager',
        settings: 'Settings',
        back: 'Back',
        
        // Home page
        welcomeMessage: 'Welcome! Please go to <a href="settings.html">Settings</a> to configure your currency, then create your first item.',
        addNewItem: '+ Add New Item',
        
        // Item card
        items: 'items',
        avg: 'avg',
        useOne: 'Consume one',
        useMore: 'Consume more...',
        purchase: 'Purchase',
        history: 'History',
        more: 'More...',
        moreWithDots: 'More...',
        less: 'Less',
        rename: 'Rename',
        backgroundColor: 'Background Color',
        delete: 'Delete',
        
        // Add item modal
        addItemTitle: 'Add New Item',
        itemName: 'Item Name (max 64 characters):',
        itemNamePlaceholder: 'e.g., Bag of pellet 15kg',
        backgroundColorLabel: 'Background Color:',
        createItem: 'Create Item',
        itemAlreadyExists: 'This item already exists',
        enterItemName: 'Please enter an item name',
        
        // Purchase modal
        purchaseItemsTitle: 'Purchase Items',
        numberOfItems: 'Number of Items:',
        pricePerItem: 'Price per Item:',
        total: 'Total',
        purchaseDateTime: 'Purchase Date and Time:',
        storeName: 'Store Name (optional):',
        addPurchase: 'Add Purchase',
        freeItemConfirm: 'Are you sure this item was free (0.00)?',
        enterValidQuantity: 'Please enter a valid quantity',
        lastItemConfirm: 'By deleting this item, the stock will be fully empty.',
        stockEmptyConfirm: 'By deleting this item, the stock will be fully empty.',
        
        // Consume modal
        consumeItemsTitle: 'Consume Items',
        selectPrice: 'Select the price of items to consume',
        available: 'available',
        perItem: 'per item',
        from: 'from',
        noItemsInStock: 'No items in stock!',
        notEnoughItems: 'Not enough items in stock!',
        howManyConsume: 'How many items to consume? (Available: ',
        notEnoughAtPrice: 'Not enough items at this price. Available: ',
        cannotRemoveAtPrice: 'It is not possible to remove so many items at this price',
        
        // Rename modal
        renameItemTitle: 'Rename Item',
        newName: 'New Name:',
        renameButton: 'Rename',
        enterNewName: 'Please enter a new name',
        itemNameExists: 'An item with this name already exists',
        
        // Change color modal
        changeColorTitle: 'Change Background Color',
        changeColorButton: 'Change Color',
        
        // Delete confirmation
        deleteConfirm: 'Delete "{0}" and all its history?\n\nThis action cannot be undone.',
        
        // Settings page
        settingsTitle: 'Settings',
        generalSettings: 'General Settings',
        currency: 'Currency:',
        language: 'Language:',
        colorScheme: 'Color Scheme:',
        saveSettings: 'Save Settings',
        settingsSaved: '✓ Settings saved successfully!',
        
        // Data management
        dataManagement: 'Data Management',
        exportData: 'Export Data',
        exportInfo: 'Download all your data as a JSON file for backup',
        exportDataQR: 'Export Data to QR',
        exportQRInfo: 'Generate a QR code containing all your data',
        importData: 'Import Data',
        importDataQR: 'Import Data from QR',
        importQRInfo: 'Scan a QR code to import data',
        importWarning: '⚠️ Warning: This will replace all existing data',
        clearAllData: 'Clear All Data',
        clearWarning: '⚠️ Warning: This will permanently delete all your data',
        dataExported: 'Data exported successfully!',
        importConfirm: 'Import this file? This will replace ALL existing data!',
        dataImported: 'Data imported successfully! Redirecting...',
        importError: 'Error: {0}',
        clearDataConfirm: 'Are you sure you want to delete ALL data?\n\nThis includes:\n- All items\n- All purchases\n- All consumptions\n- All history\n\nThis action cannot be undone!',
        clearDataLastChance: 'Really delete everything? This is your last chance!',
        dataCleared: 'All data cleared! Redirecting...',
        cameraAccessError: 'Camera access denied or not available',
        
        // Currency options
        currencyEuro: '€ (Euro)',
        currencyDollar: '$ (Dollar)',
        currencyPound: '£ (Pound)',
        currencyNone: 'None',
        
        // Language options
        languageEnglish: 'English',
        languageFrench: 'Français',
        
        // Color scheme options
        colorSchemeSystem: 'System Preference',
        colorSchemeLight: 'Light',
        colorSchemeDark: 'Dark',
        
        // History page
        historyTitle: 'History: {0}',
        noHistory: 'No history for this item yet.',
        dateTime: 'Date Time',
        action: 'Action',
        quantity: 'Quantity',
        pricePerItemShort: 'Price/Item',
        store: 'Store',
        currentStock: 'Current Stock',
        totalValue: 'Total Value',
        avgPrice: 'Avg Price',
        actionPurchase: '📦 Purchase',
        actionConsume: '🔥 Consume',
        
        // Common
        close: '×',
        itemNotFound: 'Item not found'
    },
    
    FR: {
        // Header
        appTitle: 'Gestionnaire d\'Approvisionnement',
        settings: 'Paramètres',        back: 'Retour',        
        // Home page
        welcomeMessage: 'Bienvenue ! Allez dans <a href="settings.html">Paramètres</a> pour configurer votre devise, puis créez votre premier article.',
        addNewItem: '+ Ajouter un Article',
        
        // Item card
        items: 'articles',
        avg: 'moy',
        useOne: 'Consommer 1',
        useMore: 'Consommer...',
        purchase: 'Acheter',
        history: 'Historique',
        more: 'Plus...',
        moreWithDots: 'Plus...',
        less: 'Moins',
        rename: 'Renommer',
        backgroundColor: 'Couleur de Fond',
        delete: 'Supprimer',
        
        // Add item modal
        addItemTitle: 'Ajouter un Article',
        itemName: 'Nom de l\'Article (max 64 caractères) :',
        itemNamePlaceholder: 'ex: Sac de pellets 15kg',
        backgroundColorLabel: 'Couleur de Fond :',
        createItem: 'Créer l\'Article',
        itemAlreadyExists: 'Cet article existe déjà',
        enterItemName: 'Veuillez entrer un nom d\'article',
        
        // Purchase modal
        purchaseItemsTitle: 'Acheter des Articles',
        numberOfItems: 'Nombre d\'Articles :',
        pricePerItem: 'Prix par Article :',
        total: 'Total',
        purchaseDateTime: 'Date et Heure d\'Achat :',
        storeName: 'Nom du Magasin (optionnel) :',
        addPurchase: 'Ajouter l\'Achat',
        freeItemConfirm: 'Êtes-vous sûr que cet article était gratuit (0.00) ?',
        enterValidQuantity: 'Veuillez entrer une quantité valide',
        lastItemConfirm: 'En supprimant cet article, le stock sera complètement vide.',
        stockEmptyConfirm: 'En supprimant cet article, le stock sera complètement vide.',
        
        // Consume modal
        consumeItemsTitle: 'Consommer des Articles',
        selectPrice: 'Sélectionnez le prix des articles à consommer',
        available: 'disponibles',
        perItem: 'par article',
        from: 'de',
        noItemsInStock: 'Aucun article en stock !',
        notEnoughItems: 'Pas assez d\'articles en stock !',
        howManyConsume: 'Combien d\'articles à consommer ? (Disponible : ',
        notEnoughAtPrice: 'Pas assez d\'articles à ce prix. Disponible : ',
        cannotRemoveAtPrice: 'Il est impossible de retirer autant d\'articles à ce prix',
        
        // Rename modal
        renameItemTitle: 'Renommer l\'Article',
        newName: 'Nouveau Nom :',
        renameButton: 'Renommer',
        enterNewName: 'Veuillez entrer un nouveau nom',
        itemNameExists: 'Un article avec ce nom existe déjà',
        
        // Change color modal
        changeColorTitle: 'Changer la Couleur de Fond',
        changeColorButton: 'Changer la Couleur',
        
        // Delete confirmation
        deleteConfirm: 'Supprimer "{0}" et tout son historique ?\n\nCette action ne peut pas être annulée.',
        
        // Settings page
        settingsTitle: 'Paramètres',
        generalSettings: 'Paramètres Généraux',
        currency: 'Devise :',
        language: 'Langue :',
        colorScheme: 'Schéma de Couleur :',
        saveSettings: 'Enregistrer',
        settingsSaved: '✓ Paramètres enregistrés avec succès !',
        
        // Data management
        dataManagement: 'Gestion des Données',
        exportData: 'Exporter les Données',
        exportInfo: 'Téléchargez toutes vos données dans un fichier JSON pour sauvegarde',
        exportDataQR: 'Exporter vers QR Code',
        exportQRInfo: 'Générer un QR code contenant toutes vos données',
        importData: 'Importer les Données',
        importDataQR: 'Importer depuis QR Code',
        importQRInfo: 'Scanner un QR code pour importer les données',
        importWarning: '⚠️ Attention : Ceci remplacera toutes les données existantes',
        clearAllData: 'Effacer Toutes les Données',
        clearWarning: '⚠️ Attention : Ceci supprimera définitivement toutes vos données',
        dataExported: 'Données exportées avec succès !',
        importConfirm: 'Importer ce fichier ? Ceci remplacera TOUTES les données existantes !',
        dataImported: 'Données importées avec succès ! Redirection...',
        importError: 'Erreur : {0}',
        clearDataConfirm: 'Êtes-vous sûr de vouloir supprimer TOUTES les données ?\n\nCela inclut :\n- Tous les articles\n- Tous les achats\n- Toutes les consommations\n- Tout l\'historique\n\nCette action ne peut pas être annulée !',
        clearDataLastChance: 'Vraiment tout supprimer ? C\'est votre dernière chance !',
        dataCleared: 'Toutes les données ont été effacées ! Redirection...',
        cameraAccessError: 'Accès à la caméra refusé ou indisponible',
        
        // Currency options
        currencyEuro: '€ (Euro)',
        currencyDollar: '$ (Dollar)',
        currencyPound: '£ (Livre)',
        currencyNone: 'Aucune',
        
        // Language options
        languageEnglish: 'English',
        languageFrench: 'Français',
        
        // Color scheme options
        colorSchemeSystem: 'Préférence Système',
        colorSchemeLight: 'Clair',
        colorSchemeDark: 'Sombre',
        
        // History page
        historyTitle: 'Historique : {0}',
        noHistory: 'Aucun historique pour cet article.',
        dateTime: 'Date Heure',
        action: 'Action',
        quantity: 'Quantité',
        pricePerItemShort: 'Prix/Article',
        store: 'Magasin',        currentStock: 'Stock Actuel',
        totalValue: 'Valeur Totale',
        avgPrice: 'Prix Moyen',        actionPurchase: '📦 Achat',
        actionConsume: '🔥 Consommation',
        
        // Common
        close: '×',
        itemNotFound: 'Article introuvable'
    }
};

// Get translation for current language
function t(key, ...args) {
    const settings = getSettings();
    const lang = settings.language || 'EN';
    let text = translations[lang][key] || translations.EN[key];
    
    if (!text) {
        console.warn(`[i18n] Missing translation key: "${key}"`);
        text = key;
    }
    
    // Replace placeholders {0}, {1}, etc. with arguments
    args.forEach((arg, index) => {
        text = text.replace(`{${index}}`, arg);
    });
    
    return text;
}

// Get current language
function getCurrentLanguage() {
    const settings = getSettings();
    return settings.language || 'EN';
}
