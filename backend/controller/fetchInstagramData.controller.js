const fetchInstagramData = async (username) => {
    try {
        const response = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
        const data = response.data.graphql.user;

        return {
            profilePic: data.profile_pic_url_hd,
            username: data.username,
            followers: data.edge_followed_by.count,
            following: data.edge_follow.count,
            posts: data.edge_owner_to_timeline_media.count,
        };
    } catch (error) {
        throw new Error('Failed to fetch Instagram profile data');
    }
};
