import MSGAdapter from './MSGAdapter';
export default class MSGDirectAdapter extends MSGAdapter {

  format(data) {
    return data;
  }
}