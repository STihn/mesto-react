export const renderLoading = (button, isLoading, btnText) => {
    if(isLoading) {
        button.setAttribute('disabled', true)
        button.textContent = btnText;
    } else {
        button.removeAttribute('disabled')
        button.textContent = btnText;
    }
}