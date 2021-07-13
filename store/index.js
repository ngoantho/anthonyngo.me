export const state = () => ({
})

export const actions = {
  async gql({commit, state}, params) {
    const { query, variables={} } = params;

    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
  }
}
