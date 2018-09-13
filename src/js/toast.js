//@ts-check
export function displayToast(message = '') {
    const toast = document.getElementById('toast');
    toast.innerHTML = message;
    toast.classList.add('toast-visible');
    setTimeout(() => toast.classList.remove('toast-visible'), 2900);
}

