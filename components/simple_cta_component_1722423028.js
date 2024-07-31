/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722423028", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-700 flex-1 relative overflow-hidden">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6 relative z-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-3xl shadow-xl p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock Real-Time Blockchain Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-white text-opacity-90 md:text-lg">Our cutting-edge analytics platform harnesses the power of blockchain data to deliver actionable intelligence.</p>
                </div>
                
                <div id="cta-button-container" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-30 hover:bg-opacity-40 focus:ring-4 focus:ring-purple-300 font-semibold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Start Analyzing Now</a>
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-50 hover:bg-opacity-60 focus:ring-4 focus:ring-purple-300 font-semibold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Learn More</a>
                </div>
                
                <div id="hello-world-button-container" class="flex mt-6">
                    <button id="hello-world-button" class="flex-1 text-white bg-pink-500 bg-opacity-50 hover:bg-opacity-60 focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Hello World</button>
                </div>
                
                <div id="hey-there-button-container" class="flex mt-4">
                    <button id="hey-there-button" class="flex-1 text-white bg-purple-500 bg-opacity-50 hover:bg-opacity-60 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Hey There</button>
                </div>
            </div>
        </div>
        <div class="absolute inset-0 bg-pink-200 bg-opacity-20 backdrop-filter backdrop-blur-3xl"></div>
    </section>
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
