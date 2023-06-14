// https://vemto.app/blog/how-to-create-an-image-upload-viewer-with-alpinejs
function imageViewer() {
    return {
        imageUrl: '', working: '',

        fileChosen(event) {
            this.working = 'yes';
            this.fileToDataUrl(event, src => this.imageUrl = src);
        },

        fileToDataUrl(event, callback) {
            if (!event.target.files.length) return;

            let file = event.target.files[0],
                reader = new FileReader();

            heic2any({
                blob: file
            }).then(conversionResult => {
                reader.readAsDataURL(conversionResult)
                reader.onload = e => callback(e.target.result)
                this.working = 'done';
            }).catch(errorObject => {
                console.log(JSON.stringify(errorObject));
            });

            
        },
    }
}

function copyEmail() {
    navigator.clipboard.writeText('jacobdesilets@gmail.com');
}

function convertHeicToJpg() {

}