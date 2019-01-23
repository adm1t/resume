window.addEventListener("load", () => {

    let myProjects = document.querySelectorAll("#my-projects-viewer nav .project");
    myProjects.forEach((el) => {
        el.addEventListener("click", function (){

            if(!this.classList.contains("selected")){
                changeSelectedProject(this);
            }
        })
    });

    function changeSelectedProject(selectedItem){
        let prevSelectedProjectItems = document.querySelectorAll("#my-projects-viewer .selected");
        prevSelectedProjectItems.forEach((item) => {
            item.classList.remove("selected")
        });

        selectedItem.classList.add("selected");
        let selectedItemID = selectedItem.id;
        let newSelectedProjectItems = document.querySelectorAll("#my-projects-viewer ." + selectedItemID);
        newSelectedProjectItems.forEach((item) => {
            item.classList.add("selected")
        });

        if(selectedItem.classList.contains("upper")){
            let firstUnselectedProject = document.querySelectorAll("#my-projects-viewer nav .project:not(.selected)")[0];
            firstUnselectedProject.classList.add("upper");
            selectedItem.classList.remove("upper");
        }
    }
});