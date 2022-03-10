export default function toggleModal() {

    // Handle closing the Modal
    function closeModal() {
        modal.style.display = "none";
    }

    let modal = document.getElementById("myModal");
    let btn = document.getElementById("submitBtn");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = () => closeModal()
    // When user clicks submit, clode the modal
    btn.onclick = () => closeModal()
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal()
        }
    }
}