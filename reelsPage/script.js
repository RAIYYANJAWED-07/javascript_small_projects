const reels = [
    {
        username: "rayzen.op",
        likeCount: 2530,
        isLiked: false,
        commentCount: 120,
        caption: "Late night grind hits different ⚡🔥",
        video: "./reels/video1.mp4",
        userprofile: "https://images.unsplash.com/photo-1598190017548-8c7112fde4fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        shareCount: 45,
        isFollowed: true
    },
    {
        username: "techwithaycer",
        likeCount: 870,
        isLiked: true,
        commentCount: 32,
        caption: "JavaScript tip that will blow your mind! 💡",
        video: "./reels/video2.mp4",
        userprofile: "https://images.unsplash.com/photo-1674082541312-348b99d10e9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        shareCount: 10,
        isFollowed: false
    },
    {
        username: "mystic_maharajas",
        likeCount: 5120,
        isLiked: false,
        commentCount: 301,
        caption: "Squad wipes hit harder when it's M2 🧿👑",
        video: "./reels/video3.mp4",
        userprofile: "https://images.unsplash.com/photo-1697425603452-6009b04dcdc4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        shareCount: 80,
        isFollowed: true
    },
    {
        username: "travelwithriya",
        likeCount: 1490,
        isLiked: false,
        commentCount: 60,
        caption: "Sunsets in Bali >>> 🏝️✨",
        video: "./reels/video4.mp4",
        userprofile: "https://images.unsplash.com/photo-1633498561865-13ff1e42dabf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
        shareCount: 22,
        isFollowed: false
    },
    {
        username: "coding_simplified",
        likeCount: 2100,
        isLiked: false,
        commentCount: 95,
        caption: "Master React in 30 seconds 😉",
        video: "./reels/video5.mp4",
        userprofile: "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 30,
        isFollowed: true
    },
    {
        username: "fitness_by_aarav",
        likeCount: 740,
        isLiked: true,
        commentCount: 20,
        caption: "Shoulder day 🔥 Try this routine!",
        video: "./reels/video1.mp4",
        userprofile: "https://images.unsplash.com/photo-1701915236117-b6d4886b33ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        shareCount: 12,
        isFollowed: false
    },
    {
        username: "daily_quotes",
        likeCount: 4200,
        isLiked: true,
        commentCount: 188,
        caption: "“Discipline > Motivation” ✨",
        video: "./reels/video2.mp4",
        userprofile: "https://images.unsplash.com/photo-1542216456847-8a86b2746ae2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        shareCount: 70,
        isFollowed: false
    },
    {
        username: "foodie_nihal",
        likeCount: 3100,
        isLiked: false,
        commentCount: 145,
        caption: "Hyderabadi biryani supremacy 😍🔥",
        video: "./reels/video3.mp4",
        userprofile: "https://plus.unsplash.com/premium_photo-1675129256093-a2a7705112e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
        shareCount: 55,
        isFollowed: true
    },
    {
        username: "uxbyhina",
        likeCount: 980,
        isLiked: true,
        commentCount: 47,
        caption: "3 UI tricks every designer must know 🎨",
        video: "./reels/video4.mp4",
        userprofile: "https://images.unsplash.com/photo-1611331325550-d29134b08817?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
        shareCount: 18,
        isFollowed: false
    },
    {
        username: "crypto_vision",
        likeCount: 5600,
        isLiked: true,
        commentCount: 410,
        caption: "Bitcoin breakout coming? 🚀📈",
        video: "./reels/video5.mp4",
        userprofile: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        shareCount: 120,
        isFollowed: true
    }
];

let sum = ''

reels.forEach(function (elem) {
    sum = sum + ` <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow' : 'follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4> 
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4> 
                        </div>
                    </div>
                </div>`
})


var allreels = document.querySelector('.all-reels')
allreels.innerHTML = sum