import axios from 'axios';

export default {
  search_field: data => axios.get('/game/search_field', {params: {...data}}),
  get_slider_games: () => axios.get('/game/slider'),
  get_template_count_page: () => axios.get('/game/template/page_count'),
  get_template_games: data => axios.get('/game/template', {params: {...data}}),
  get_game_page: data => axios.get('/game', {params: {...data}}),
  get_game_search_count_page: data => axios.get('/game/search/page_count', {params: {...data}}),
  get_template_game_search: data => axios.get('/game/search', {params: {...data}}),
};
