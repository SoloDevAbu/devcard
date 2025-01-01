const generateCard = async (req, res) => {
    const { profileUrl } = req.body;

    try {
        // Step 1: Extract username from the Instagram URL
        const username = profileUrl.split('/').filter(Boolean).pop();

        // Step 2: Fetch Instagram profile data (via scraping or API)
        const profileData = await fetchInstagramData(username);

        // Step 3: Generate the card using Canvas
        const cardBuffer = await generateCard(profileData);

        // Step 4: Send the card as a response
        res.set({
            'Content-Type': 'image/png',
            'Content-Disposition': `attachment; filename=${username}-card.png`,
        });
        res.send(cardBuffer);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error generating card' });
    }
}

const generateCardd = async (profileData) => {
    const canvas = createCanvas(600, 400); // Width x Height
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#FFDEE9'; // Gradient color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load and draw profile picture
    const profilePic = await loadImage(profileData.profilePic);
    ctx.drawImage(profilePic, 50, 50, 100, 100);

    // Username
    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(profileData.username, 180, 80);

    // Followers, Following, Posts
    ctx.font = '16px Arial';
    ctx.fillText(`Followers: ${profileData.followers}`, 180, 120);
    ctx.fillText(`Following: ${profileData.following}`, 180, 150);
    ctx.fillText(`Posts: ${profileData.posts}`, 180, 180);

    // Convert to buffer
    return canvas.toBuffer('image/png');
};


module.exports = generateCard;