const { ipcRenderer } = window.require('electron');

export function sendMinimize() {
    ipcRenderer.send('minimize');
}

export function sendClose() {
    ipcRenderer.send('close');
}

export function sendMaximize() {
    ipcRenderer.send('maximize');
}