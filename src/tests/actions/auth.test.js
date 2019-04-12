import {login, logout} from '../../actions/auth';

test('login', () => {
    const action = login('123abc');
    expect(action).toEqual({
      type: 'LOGIN',
      uid: '123abc'
    });
});

test('logout', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
});