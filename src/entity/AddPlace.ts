import Entity from "./Entity";
import * as THREE from 'three'

interface AddPlaceArgs {
    id: number;
    onClick: () => void;
}

class AddPlace extends Entity{
    private id: number;
    onClick: () => void;
    public constructor(args: AddPlaceArgs) {
        super();
        this.id = args.id;
        this.onClick = args.onClick;
    }
    create = () => {
        const addPlace = new THREE.Group();
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(.5, .1, .5),
            new THREE.MeshStandardMaterial({
                color: 0xf08080,
                metalness: .6,
                roughness: .4
            })
        )
        mesh.name = "server";
        addPlace.add(mesh);
        return addPlace;
    };
}
export default AddPlace;