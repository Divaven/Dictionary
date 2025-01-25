import WatchJS from './melanke-watchjs.js';
import model from '../js/model.js';
import view from '../js/view.js';

const {watch} = WatchJS;

function watchState() {
    watch(model.state, 'dictionary', () => {
        localStorage.setItem('dictionary', JSON.stringify(model.state.dictionary));
        view.renderDictionaryList(model.state.dictionary);
    });

    watch(model.state, 'currentTranslation', () => {
        view.renderTranslation(model.state.currentTranslation);
        view.setAddButtonState(true);
    });

    watch(model.state, 'currentWord', () => {
        if (!model.state.currentWord) {
            view.setAddButtonState(false);
            view.clearTranslation();
        }
    });

    watch(model.state, 'errorMessage', () => {
        if (model.state.errorMessage) {
            view.renderError(model.state.errorMessage);
            view.setAddButtonState(false);
        } else {
            view.clearTranslation();
        }
    });
}

export {watchState};
