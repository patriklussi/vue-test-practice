import { shallowMount } from "@vue/test-utils"
import fruitBowl from "../../src/components/FruitBowl.vue";


//Skapa två arrayer, en fylld med minst 5 frukter, den andra tom. När man klickar på en frukt så ska frukten kopieras in i den tomma arrayen.
//Du ska så att säga “klicka ihop din fruktsallad”. 
//Den från början tomma arrayen får fyllas med hur många kopior av frukter som helst.


describe("FruitBowl.vue",()=>{
    let wrapper, data;
    beforeEach(() => {
      data = ["apple","banana","pineapple","orange", "peach","raspberry","kiwi"];
      wrapper = shallowMount(fruitBowl, {
        data: () => {
          return {
           fruits: data
          }
        }
      });
    });

it("Should leave the bowl array empty if not clicked", async()=>{
    const bowlCount = wrapper.findAll("ul > li");
    expect(bowlCount.length).toBe(0);
})

it("Should copy over fruits into the bowl",async()=>{
 

const trigger = wrapper.find("#pButton");
await trigger.trigger("");
const bowl = wrapper.findAll("ul > li");
expect(bowl.length).toBe(7);
  
})
});

