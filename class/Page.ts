class Page {
    public static showElementById(id: string){
        (<HTMLElement>document.getElementById(id)).style.display = "block";
    }
    public static hideElementById(id: string){
        (<HTMLElement>document.getElementById(id)).style.display = "none";
    }
}

export {Page}