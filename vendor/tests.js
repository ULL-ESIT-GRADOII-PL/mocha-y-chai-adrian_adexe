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

   describe("Creación de un objeto Kelvin", function(){
      var kelvin = new Kelvin(2);
      it("Debe tener un número", function(){
         expect(kelvin.valor).to.equal(2);
      });
      it("Debe tener una unidad de medida", function(){
         expect(kelvin.tipo).to.equal('k');
      });
   });

   describe("Creación de un objeto Celsius", function(){
      var celsius = new Celsius(3);
      it("Debe tener un número", function(){
         expect(celsius.valor).to.equal(3);
      });
      it("Debe tener una unidad de medida", function(){
         expect(celsius.tipo).to.equal('c');
      });
   });

   describe("Creación de un objeto Farenheit", function(){
      var farenheit = new Farenheit(10);
      it("Debe tener un número", function(){
         expect(farenheit.valor).to.equal(10);
      });
      it("Debe tener una unidad de medida", function(){
         expect(farenheit.tipo).to.equal('f');
      });
   });
});
