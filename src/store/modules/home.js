import mockRequest  from '@/utils/mockRequest'
const state = {
    list:{}
}
const mutations = {
    GETDTA(state,list){
        state.list = list
    }
};
const actions = {
    async getData({commit}){
        let result = await mockRequest.get('./home/list');
        if(result.code=20000){
            commit("GETDTA",result.data)
        }
    }
};
const getters = {};
export default  {
    state,
    mutations,
    actions,
    getters
}