import * as types from './mutation-types'

export const add_ = ({commit}) => {
    commit('add')
}
export const plus_ = ({commit}) => {
    commit('plus')
}

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened)
export const genTree = ({ commit },list) => commit(types.GEN_Tree,list)
