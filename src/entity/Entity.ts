import * as THREE from 'three'

interface Entity {
    create(): THREE.Group;
    clear(): void;
}

export default Entity;