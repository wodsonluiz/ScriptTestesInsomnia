insomnia.test('Check if status is 204', () => {
    insomnia.expect(insomnia.response.code).to.eql(204);
});