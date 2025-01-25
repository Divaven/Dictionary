import model from './model.js';

const controller = {
    init() {

    },

    async handleTranslate(inputWord) {
        model.state.errorMessage = '';
        if (!inputWord) {
            model.state.errorMessage = 'Введите слово для перевода!';
            return;
        }

        try {
            const translation = await model.fetchTranslation(inputWord);
            model.state.currentWord = inputWord;
            model.state.currentTranslation = translation;
        } catch (err) {
            model.state.errorMessage = err.message;
        }
    },

    handleAdd() {
        const { currentWord, currentTranslation } = model.state;
        if (!currentWord || !currentTranslation) {
            model.state.errorMessage = 'Нет данных для добавления!';
            return;
        }
        model.addWord(currentWord, currentTranslation);

        model.state.currentWord = '';
        model.state.currentTranslation = '';
        model.state.errorMessage = '';
    },

    handleRemove(wordToRemove) {
        model.removeWord(wordToRemove);
    }
};

export default controller;
