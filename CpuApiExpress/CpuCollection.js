// import du module FileSystem (permet de manipuler les fichiers locaux)
const fs = require('fs');

class CpuCollection
{
    constructor()
    {
        // Chargement du JSON (e frontend, on utilisait fetch pour charger un fichier distant)
        // ici, on charge un fichier local
        let rawdata = fs.readFileSync('cpuz.json');

        // Conversion du JSON en objet JS et stockage de l'objet dans this.data
        this.data = JSON.parse(rawdata);
    }

    /**
     * 
     * @param {Number} _id 
     * @returns {Object} found CPU or empty object if not found
     */
    findCpuById(_id)
    {
        let cpu = {};
        
        this.data.forEach(element => {
            if (element.id == _id)
            {
                cpu = element;
            }
            
        });
        
        // implémenter ici la recherche d'un CPU par son identifiant

        return cpu;
    }

    addCpu(_newCpu)
    {
        let maxId = 0;
        let isOk = true;
        // implémenter ici l'ajout d'un CPU dans la collection 'this.data' puis retourner le nouveau CPU ajouté
        // Pensez à générer un nouvel identifiant pour le nouveau CPU
        this.data.forEach(element => {
            if (element.id > maxId)
            {
                maxId = element.id;
            }
        });
        if(_newCpu.Brand == undefined || _newCpu.Brand == "")
        {
            isOk = false;
        }
          
        _newCpu.Id = maxId + 1;
        if (isOk)
        {
            this.data.push(_newCpu);
        }
        return _newCpu;
    }
}


module.exports = CpuCollection