document.addEventListener('DOMContentLoaded', changeImage);
function changeImage() {
    const myImage = document.getElementById('my-image');
    myImage.src = 'https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304';
    let i = 0;
    document.querySelector('main button').addEventListener('click', () => {
        i++;
        switch (i %= 4) {
            case 0:
                myImage.src = 'https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304';
                myImage.style.cssText= 'height: auto; width: 100%;';
                break;
            case 1:
                myImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2X1Xui0Ntnj0o6ewhKx30du69QNTf_eJyvw&s';
                break;
            case 2:
                myImage.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Lmbox.jpg/220px-Lmbox.jpg';
                myImage.style.cssText= 'transform: translateY(-10%)';
                break;
            case 3:
                myImage.src = 'https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2020/05/12/ADE4B61B-8E79-4520-811D-4F0532562D85/97.jpg?crop=1422,800,x0,y0&width=1600&height=900&optimize=high&format=webply';
                myImage.style.cssText= 'height: 100%; width: auto;';
                break;
            default:
                myImage.src = 'https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304';
                break;
        }
    });
}
