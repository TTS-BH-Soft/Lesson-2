import tw from 'twin.macro'

export const RecentPostsContainer = tw.div`bg-white rounded-lg shadow-lg p-4`
export const RecentPostItem = tw.li`flex space-x-4 mb-4`
export const RecentPostImage = tw.img`w-16 h-16 object-cover rounded-md`
export const RecentPostDate = tw.p`text-sm [color: #FF64AE] font-medium`
export const RecentPostTitle = tw.p`text-sm text-gray-800`
