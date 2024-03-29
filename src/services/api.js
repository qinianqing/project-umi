import request from '../utils/request';
export async function queryHeroList() {
  return request('/api/herolist.json')
    
}
export async function getHeroDetails(params) {
    return request('/api/herodetails.json', {
        method: 'post',
        data: params,
    });
}
export async function queryItem() {
  return request('/api/item.json');
}
export async function querySummoner() {
  return request('/api/summoner.json');
}
export async function queryMing() {
  return request('/api/ming.json');
}