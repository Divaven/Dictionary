import controller from './controller.js';

const view = {
    wordInputEl: document.getElementById('wordInput'),
    translateBtnEl: document.getElementById('translateBtn'),
    translationBlockEl: document.getElementById('translationBlock'),
    addToDictionaryBtnEl: document.getElementById('addToDictionaryBtn'),
    dictionaryListEl: document.getElementById('dictionaryList'),

    renderTranslation(translation) {
        this.translationBlockEl.textContent = translation;
    },

    renderError(msg) {
        this.translationBlockEl.textContent = msg;
    },

    clearTranslation() {
        this.translationBlockEl.textContent = '';
    },

    setAddButtonState(isEnabled) {
        this.addToDictionaryBtnEl.disabled = !isEnabled;
    },

    renderDictionaryList(dictionary) {
        this.dictionaryListEl.innerHTML = '';
        dictionary.forEach(({ word, translation }) => {
            const div = document.createElement('div');
            div.className = 'list-group-item d-flex justify-content-between';

            const textSpan = document.createElement('span');
            textSpan.textContent = `${word} — ${translation}`;

            const removeBtn = document.createElement('span');
            removeBtn.className = 'remove-btn text-danger';
            removeBtn.textContent = 'x';
            removeBtn.style.cursor = 'pointer';

            removeBtn.addEventListener('click', () => {
                controller.handleRemove(word);
            });

            div.appendChild(textSpan);
            div.appendChild(removeBtn);

            this.dictionaryListEl.appendChild(div);
        });
    }
};

export default view;
