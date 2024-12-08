import * as THREE from "three";
import Component, { ComponentArgs } from "../Component";

interface RackServerComponentArgs extends ComponentArgs {};

class RackServerComponent extends Component {
    protected mainColor: number;
    constructor(args: RackServerComponentArgs) {
        super();
        this.mainColor = args.mainColor;
    }
    create(): THREE.Object3D {
        return new THREE.Object3D();
    }
    clear(): void {
    }
    
}

export default RackServerComponent;