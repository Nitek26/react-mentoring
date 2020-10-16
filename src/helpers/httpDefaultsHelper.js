export const addGetRequestWithParams = params => Object.assign({}, {
  method: 'GET',
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Pragma': 'no-cache'
  }
}, params);

export const addPostRequestWithBody = body => Object.assign({}, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Pragma': 'no-cache'
    }
  }, {body: JSON.stringify(body)});

export const addPutRequestWithBody = body => Object.assign({}, {
  method: 'PUT',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Pragma': 'no-cache'
  }
}, {body: JSON.stringify(body)});

export const addDeleteRequestWithParams = params => Object.assign({}, {
  method: 'DELETE',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Pragma': 'no-cache'
  }
}, params);