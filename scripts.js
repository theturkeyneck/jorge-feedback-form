document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (e) {
        const charisma = parseInt(document.getElementById('charisma-input').value);
        const intelligence = parseInt(document.getElementById('intelligence-input').value);
        const wisdom = parseInt(document.getElementById('wisdom-input').value);
        const dexterity = parseInt(document.getElementById('dexterity-input').value);
        const strength = parseInt(document.getElementById('strength-input').value);
        const creativity = parseInt(document.getElementById('creativity-input').value);
        const collaboration = parseInt(document.getElementById('collaboration-input').value);
        const accountability = parseInt(document.getElementById('accountability-input').value);

        const totalXP = (charisma + intelligence + wisdom + dexterity + strength + creativity + collaboration + accountability) * 2;

        const totalXPInput = document.createElement('input');
        totalXPInput.type = 'hidden';
        totalXPInput.name = 'totalXP';
        totalXPInput.value = totalXP;
        form.appendChild(totalXPInput);
    });
});
