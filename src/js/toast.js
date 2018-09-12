//@ts-check
export function displayToast(message = '') {
    const toast = document.getElementById('toast');
    toast.innerHTML = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2900);
}

