import * as THREE from "three";
import Component, { ComponentArgs } from "../Component";


interface ServerRackComponentArgs extends ComponentArgs {
    subColor: number;
};

class ServerRackComponent extends Component{
    protected mainColor: number;
    
    constructor(args: ServerRackComponentArgs) {
        super();
        this.mainColor = 0xffffff;
    }

    craete(): THREE.Group {
        const serverRack: THREE.Group = new THREE.Group();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0xffffff})

        return serverRack;
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }
}
export default ServerRackComponent;