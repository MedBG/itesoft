const request = require('supertest');
const app = require('../');
const data = require('../models/Frescoes');


/*tester les differents services de l'api*/
describe('Frescoes Service', function () {


    /*tester le retour d'une liste des frescoes qui n'est pas vide, on teste s'il contient des attributs (exemple ID)*/
    it('GET /frescoes, doit retourner une liste de frescoes', async () => {
        const res = await request(app).get('/frescoes')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    ID: 1
                }),
                expect.objectContaining({
                    ID: 2
                })
            ])
        )
    })


    /*tester le retour d'une liste des frescoes qui n'est pas vide, on teste s'il contient des attributs (exemple ID)*/
    it('GET /frescoes/:id, doit retourner un objet de frescoes', async () => {
        const res = await request(app).get('/frescoes/' + 1)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject({
            ID: expect.any(Number),
            CODE_INSEE: expect.any(Number),
            CATEGORIE: expect.any(String),
            ETAT_OEUVRE: expect.any(String),
            PHOTO: expect.any(String),
            ETAT_SUPPORT: expect.any(String),
            COMMENTAIRE: expect.any(String),
            SUPPORT: expect.any(String),
            ANNEE_CREATION: expect.any(String),
            ARTISTE: expect.any(String),
            MAITRE_OEUVRE: expect.any(String),
            PROPRIETAIRE: expect.any(String),
            MNEMO: expect.any(String),
            NUM_POSTAL: expect.any(Number),
            SECTION: expect.any(String),
            PARCELLE: expect.any(Number),
            GEO_POINT: expect.any(String),
            GEO_SHAPE: {
                type: expect.any(String),
                coordinates: [
                    expect.any(Number),
                    expect.any(Number)
                ]
            },
            NOM_RUE: expect.any(String)
        })
    })


    
     /*tester le retour d'une liste des frescoes qui n'est pas vide, et qui est trier en ordre descendant*/
     it('GET /frescoes/desc, doit retourner une liste de frescoes trier en ordre DESC', async () => {
        const res = await request(app).post('/frescoes/desc')
        
        expect(res.statusCode).toEqual(200)
        var byDate = data.Frescoes;
        byDate =byDate.sort((a, b) => {
            if (a.ANNEE_CREATION < b.ANNEE_CREATION)
              return -1;
            if (a.ANNEE_CREATION > b.ANNEE_CREATION)
              return 1;
            return 0;
          })
        expect(res.body).toEqual(byDate)
    })

      /*ester le retour d'une liste des frescoes qui n'est pas vide, et qui est trier en ordre ascendant*/
      it('GET /frescoes/desc, doit retourner une liste de frescoes trier en ordre ASC', async () => {
        const res = await request(app).post('/frescoes/asc')
        
        expect(res.statusCode).toEqual(200)
        var byDate = data.Frescoes;
        byDate =byDate.sort((a, b) => {
            if (a.ANNEE_CREATION > b.ANNEE_CREATION)
              return -1;
            if (a.ANNEE_CREATION < b.ANNEE_CREATION)
              return 1;
            return 0;
          })
        expect(res.body).toEqual(byDate)
    })

    /*tester si l'objet et  il suppriimer*/
    it('should delete a frescoes', async () => {
        const res = await request(app).delete('/frescoes/:ID');
        expect(res.statusCode).toEqual(200);
      });
})
