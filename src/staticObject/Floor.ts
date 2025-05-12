import * as THREE from "three";

class Floor {
    
    create = (): THREE.Group => {
        const floor = new THREE.Group();

        floor.add(new THREE.Mesh(
            new THREE.BoxGeometry(5, .1, 5),
            new THREE.MeshStandardMaterial({
                color: 0xcccccc,
                metalness: .6,
                roughness: .4
            })
        ));
        
        return floor;
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

export default Floor;