# Technologies used:
Solidity, Foundry, Web3.js, Javascript, Next.JS, Livepeer protocol for video hosting, Filecoin protocol for image hosting, graph protocol for quering events from smart contracts

# Problem it solves
Many issues with centralised blogging services can be resolved by a decentralised blogging platform:

Censorship: The proprietors of centralised blogging platforms or governments frequently restrict and remove information from these sites. A decentralised platform can safeguard the right to free speech and guarantee that content is not taken down without justification.

Privacy: Users may be concerned about their privacy due to the frequent collection and usage of user data by centralised platforms. By using blockchain technology, a decentralised network can offer greater privacy and security.

Control: On centralised platforms, the content is in the ownership of the platform, who also have the right to remove or alter it. Users can have complete control over their material, including ownership, distribution, and revenue, thanks to a decentralised platform.

Centralized platforms frequently use intermediaries, such as publishers or ads, who take a cut of the money generated by content producers. A decentralised network can do away with middlemen and give content producers direct income prospects.

# Blogging features - 
Author will be able to post Text, Images, Audio and Videos.
Author can create tags for the post.
Author will need to pay some eth as they post, as that eth will be used to pay gas for the transactions done for using all the protocols.
Readers can reward Authors for their content with eth.
Push protocol we can use to notify the authors if someone has paid some amount for the post.
Livepeer will be used to store videos over IPFS
Filecoin will be used to store images over IPFS
Function getLatestPosts will fetch 5 latest posts published
Function getPostById will fetch a single post for the provided Id
Function getPostByIds will fetch all the posts requested by the array of Ids
Function getMyPosts will fetch all the posts posted by the Author
Function getAllPosts will fetch all the posts

## UI Features - 
Navigation Bar
Categories tags on left
Default content in center
Pay button for posting

## UX Considerations - 
Clarity of displayed data
Displaying the wait time for every transaction
Clarify the irreversible actions
Intuitive
Giving as much control to the user 
## Frontend Requirements - 
Contract address
Contract ABI
A provider and signer
	
## VISION - 
## PRINCIPLES - Security and Privacy, transparency & accountability, decentralization & freedom
## TARGET AUDIENCE - 
## VALUE CREATED - Easy monetization, censorship resistance, community engagement
## UTILITY - 
## COMPETITORS -  
https://mirror.xyz/
https://www.bulbapp.io/
https://www.sigle.io/

Project User Interface and Design

Landing Page
![alt text](https://github.com/aniketpr01/chainblog/blob/main/app/data/SCR-20230227-ccx.png?raw=true)

Create Post Pop up
![alt text](https://github.com/aniketpr01/chainblog/blob/main/app/data/SCR-20230227-cf2.png?raw=true)

Fetch page with results as text, image and video
![alt text](https://github.com/aniketpr01/chainblog/blob/main/app/data/SCR-20230227-cc0-2.jpeg?raw=true)


