import { shallowMount } from '@vue/test-utils'
import searchFilter from '@/components/SearchFilter.vue'

describe('searchFilter', () => {

  let wrapper, data;
  beforeEach(()=>{
    data = ['cat', 'dog', 'parrot', 'goldfish', 'horse', 'elephant', 'ant', 'snake', 'crow', 'cow', 'eagle', 'rhinoceros', 'chimpanzee'];
     wrapper = shallowMount(searchFilter,{
      data:()=>{
        return {
          animals: data

        }
      }
    });
  });

 it("Should return all alternatives if text field is empty",()=>{

  const animalsCount = wrapper.findAll("ul > li").length;
  
  expect(animalsCount).toBe(data.length);

 });

 it("should return dog or goldfish if query is d", async()=>{

    const inputElem = wrapper.find("#wordInput");
    await inputElem.setValue("d");
    const filterdAnimals = wrapper.findAll("ul > li").wrappers;
    const hasDog = filterdAnimals.some(li => li.text() === "dog");
    const hasGoldfish = filterdAnimals.some(li => li.text() === "goldfish");
    expect(hasDog && hasGoldfish).toBe(true);
    expect(filterdAnimals.length).toBe(2);
 });

 it("should return crow or cow if query is ow", async()=>{
  const inputElem = wrapper.find("#wordInput");
  await inputElem.setValue("ow");
  const filterdAnimals = wrapper.findAll("ul > li").wrappers;
  const hasCrow = filterdAnimals.some(li => li.text() === "crow");
  const hasCow = filterdAnimals.some(li => li.text() === "cow");
  expect(hasCrow && hasCow).toBe(true);
  expect(filterdAnimals.length).toBe(2);
 });
})
