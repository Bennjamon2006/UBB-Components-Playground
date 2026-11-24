// Este archivo debe cambiar, la idea es que en un futuro estos estilos se puedan cargar desde endpoints del backend, pero por ahora se cargan desde este archivo.

const stylesSheets = {
  modals: `.modal-open {
    overflow-y: clip !important;
}
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9998;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.4);
    /* backdrop-filter: blur(2px);          
    -webkit-backdrop-filter: blur(2px);   */
    overflow: auto;
}`,
  buttons: `.btn {
    display: inline-block;
    /* background-color: transparent; */
    background-color: #478fca;
    color: var(--color-title);
    font-weight: 400;
    /* font-size: 0.9rem; */
    border: 1px solid transparent;
    border-width: 1px;
    cursor: pointer;
    vertical-align: middle;
    padding: 2.5px 5px;
    /* padding: 1px 5px; */
    /* margin: 0; */
    margin: 0 3px 0 2px;
    position: relative;
    border-radius: 4px;
}

.btn-large {
    display: inline-block;
    /* background-color: transparent; */
    /* color: var(--color-text);
    font-weight: 400; */
    /* color: #146EBE; */
    min-width: fit-content;
    height: fit-content;
    color: var(--color-text-btn-with-border);
    background-color: var(--bg-btn-with-border);
    font-weight: bold;
    /* font-size: 0.9rem; */
    border: 2px solid #146EBE;
    /* border-width: 1px; */
    cursor: pointer;
    vertical-align: middle;
    padding: 7px 6px;
    margin: 0;
    position: relative;
    border-radius: 7px;
}

.btn-large:hover {
    background-color: #146EBE;
    color: #FFFFFF;
}

.btn-large label {
    cursor: pointer;
}`,
};

type StyleSheetName = keyof typeof stylesSheets;

const getStyleSheet = async (styleName: StyleSheetName): Promise<string> => {
  return stylesSheets[styleName];
};

const getAllStyleSheets = async (): Promise<string> => {
  return Object.values(stylesSheets).join("\n");
};

const stylesService = {
  getStyleSheet,
  getAllStyleSheets,
};

export default stylesService;
