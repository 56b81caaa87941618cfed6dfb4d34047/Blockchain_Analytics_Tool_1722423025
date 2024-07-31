/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722423028", {
    template: `
    <div class="bg-gradient-to-r from-pink-500 to-purple-600 min-h-screen">
        <nav class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src="./images/logo.svg" class="h-8 mr-3" alt="BlockOps Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">BlockOps</span>
                </a>
                <div class="flex space-x-4">
                    <a href="#" class="text-white hover:bg-pink-400 hover:bg-opacity-30 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
                    <a href="#" class="text-white hover:bg-pink-400 hover:bg-opacity-30 px-3 py-2 rounded-md text-sm font-medium transition duration-300">About</a>
                    <a href="#" class="text-white hover:bg-pink-400 hover:bg-opacity-30 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</a>
                </div>
            </div>
        </nav>

        <footer id="footer-section" class="flex-1 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16">
                <hr id="footer-divider" class="my-8 border-pink-300 border-opacity-30 sm:mx-auto lg:my-12">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            BlockOps - Blockchain Analytics Platform
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-base text-center text-white text-opacity-80">
                        Stay ahead of the curve with BlockOps. Our cutting-edge analytics engine processes and visualizes new blockchain data in real-time, giving you a competitive edge. Gain valuable insights, identify trends, and make informed decisions. Powered by AI and machine learning algorithms.
                    </div>
                </div>
            </div>
        </footer> 
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
