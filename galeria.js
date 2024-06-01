// galeria.js

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-fluid');
    const modal = new bootstrap.Modal(document.getElementById('artModal'));
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const deleteImageButton = document.getElementById('deleteImageButton');

    images.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modalDescription.textContent = `Descripción de la obra: ${image.alt}`;
            deleteImageButton.setAttribute('data-image-id', image.alt);
            modal.show();
        });
    });

    deleteImageButton.addEventListener('click', () => {
        const imageId = deleteImageButton.getAttribute('data-image-id');
        const imageToDelete = Array.from(images).find(image => image.alt === imageId);

        if (imageToDelete) {
            imageToDelete.parentElement.remove();
            modal.hide();
        }
    });
});
