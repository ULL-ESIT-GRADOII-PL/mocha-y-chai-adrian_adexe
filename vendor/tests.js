var expect = chai.expect;

describe("Temperatura",function() {
   describe("Creación de un objeto Medida", function(){
      it("Debe tener un número", function(){
         var medida = new Medida(23,'F');
         expect(medida.valor).to.equal(23);
      });
      it("Debe tener una unidad de medida", function(){
         var medida = new Medida(23,'F');
         expect(medida.tipo).to.equal('F');
      });
   });
});
