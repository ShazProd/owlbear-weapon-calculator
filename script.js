// Mapping des armes
let weaponMapping;
let OBR;

// Initialisation d'Owlbear Rodeo
async function initializeOBR() {
    OBR = await OBR.connect();
    console.log("Connected to Owlbear Rodeo!");
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser Owlbear
    initializeOBR();

    // Initialiser le mapping une fois que tous les scripts sont chargés
    weaponMapping = {
        'battle-axe': battleAxeData,
        'dagger': daggerData,
        'hand-axe': handaxeData,
        'heavy-crossbow': heavycrossbowData,
        'light-crossbow': lightcrossbowData,
        'mace': maceData,
        'morning-star': morningstarData,
        'scimitar': scimitarData
    };
});

async function calculateDamage() {
    // Récupération des valeurs du formulaire
    const weaponSelect = document.getElementById('weapon-select');
    const weaponPower = parseInt(document.getElementById('weapon-power').value);
    const monsterPower = parseInt(document.getElementById('monster-power').value);

    console.log('Selected weapon:', weaponSelect.value);
    console.log('Weapon power:', weaponPower);
    console.log('Monster power:', monsterPower);

    // Validation des entrées
    if (isNaN(weaponPower) || weaponPower < 1 || weaponPower > 150) {
        await OBR.notification.show("La puissance de l'arme doit être entre 1 et 150", "ERROR");
        return;
    }
    if (isNaN(monsterPower) || monsterPower < 1 || monsterPower > 20) {
        await OBR.notification.show("La puissance du monstre doit être entre 1 et 20", "ERROR");
        return;
    }

    // Récupération des données de l'arme sélectionnée
    const selectedWeaponKey = weaponSelect.value;
    const selectedWeapon = weaponMapping[selectedWeaponKey];

    console.log('Weapon data:', selectedWeapon);

    if (!selectedWeapon) {
        await OBR.notification.show("Arme non trouvée", "ERROR");
        return;
    }

    // Récupération des données de dégâts pour la puissance spécifiée
    const damageData = selectedWeapon.data[weaponPower];
    console.log('Power data for weapon power', weaponPower, ':', damageData);

    if (!damageData) {
        await OBR.notification.show(`Pas de données pour la puissance ${weaponPower}`, "ERROR");
        return;
    }

    // Récupération des dégâts pour la puissance du monstre (inversé car les données vont de 20 à 1)
    const damageIndex = 20 - monsterPower;
    console.log('Damage index for monster power', monsterPower, ':', damageIndex);

    const damage = damageData[damageIndex];
    console.log('Final damage value:', damage);

    // Affichage des résultats
    const resultDiv = document.getElementById('result');
    let resultHTML = `
        <h3>Résultats pour ${selectedWeapon.name}</h3>
        <p><strong>Type:</strong> ${selectedWeapon.type}</p>
        <p><strong>Description:</strong> ${selectedWeapon.description}</p>
        <p><strong>Fumble Range:</strong> ${selectedWeapon.fumbleRange}</p>
        <p><strong>Dégâts:</strong> ${damage}</p>
    `;

    // Si le dégât contient des modificateurs, les expliquer
    if (damage.length > 2) {
        let modifiers = [];
        for (let char of damage) {
            if (damageModifiers[char]) {
                modifiers.push(`${char}: ${damageModifiers[char]}`);
            }
        }
        if (modifiers.length > 0) {
            resultHTML += '<p><strong>Modificateurs:</strong></p><ul>';
            modifiers.forEach(mod => {
                resultHTML += `<li>${mod}</li>`;
            });
            resultHTML += '</ul>';
        }
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = resultHTML;

    // Envoyer une notification Owlbear avec le résultat
    await OBR.notification.show(`Dégâts calculés pour ${selectedWeapon.name}: ${damage}`, "INFO");
}
