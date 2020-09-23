import { HttpClient } from "./http";

test('get instance to not be null', () => {
    expect(HttpClient.instance).toBeTruthy();
});

test('get instance to initialize instance only once', () => {
    const instance = HttpClient.instance;
    expect(HttpClient.instance).toBe(instance);
})
