import * as THREE from "three";
import Entity from "./Entity";

class ServerEntity implements Entity{
    
    create = (): THREE.Group => {
        const server = new THREE.Group();
        
        // const serverRack = new Server
        
        // server.add(serverRack);
        return server;
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

export default ServerEntity;