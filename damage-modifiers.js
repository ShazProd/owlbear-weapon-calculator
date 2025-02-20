const damageModifiers = {
    'E': 'Critique Extrême',
    'D': 'Critique Dangereux',
    'C': 'Critique Sérieux',
    'B': 'Critique Modéré',
    'A': 'Critique Léger',
    'K': 'Coup Assommant',
    'S': 'Saignement',
    'P': 'Pénétrant'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = damageModifiers;
}
