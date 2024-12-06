import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import Page from './pages/Page';
import DefaultPage from './pages/DefaultPage';
import ServerPage from './pages/ServerPage';

class App {
    private app: HTMLElement;
    private renderer: THREE.WebGLRenderer;
    private pages: Record<string, Page> = {
        "default": new DefaultPage(),
        "server": new ServerPage()
    };
    private currentPage: Page;

    constructor() {
        this.app = document.querySelector("#app")!;
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.currentPage = new DefaultPage();

        this.app.appendChild(this.renderer.domElement)

        this.renderer.setSize(this.app.clientWidth, this.app.clientHeight);
        window.addEventListener("resize", (event) => {
            this.renderer.setSize(this.app.clientWidth, this.app.clientHeight);
        });

        this.renderer.setAnimationLoop(this.render.bind(this));
    }

    public setHelper = () => {
        const axes = new THREE.AxesHelper(10);
        this.currentPage.getScene().add(axes);

        const grid = new THREE.GridHelper(5, 20, 0xffffff, 0x444444);
        this.currentPage.getScene().add(grid);

        new OrbitControls(this.currentPage.getCamera(), this.app);
    }

    public changePage = (name: string): void => {
        this.renderer.clear();
        this.currentPage.clear();
        this.currentPage = this.pages[name];
        this.currentPage.getCamera().aspect = this.app.clientWidth / this.app.clientHeight;
    }

    private render = (): void => {
        this.renderer.render(this.currentPage.getScene(), this.currentPage.getCamera());
    }
}

export default App;