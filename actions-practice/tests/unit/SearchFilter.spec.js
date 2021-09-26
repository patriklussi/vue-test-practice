import { shallowMount } from '@vue/test-utils'
import searchFilter from '@/components/SearchFilter.vue'

describe('searchFilter', () => {

  let wrapper, data;
  beforeEach(()=>{
    let wrapper = shallowMount(searchFilter,{});
  });
 it("Should return all alternatives if text field is empty",()=>{



 });

 it("should return dog or goldfish if query is d",()=>{

 });

 it("should return crow or cow if query is ow",()=>{

 });
})
