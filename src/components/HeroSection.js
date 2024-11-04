import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex w-full h-full flex-col md:flex-row items-center justify-evenly p-3">
            {/* Info Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 mt-8 text-center">
                <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 mb-4">
                Your health journey starts here
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Revolutionize your healthcare experience with our intuitive platform, making appointment booking as effortless as enjoying a cold-pressed juice. Connect with compassionate professionals for routine check-ups or specialized care, all just a click away. Take the first step towards a healthier, happier you today!


                </p>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-200">
                    Shop Now
                </button>
            </div>

            {/* Image Section */}
            <div className="h-full">
                <Image
                width={500}
                height={500}
                    src="/instant-img.avif" // Replace with your image URL
                    alt="Hero"
                    className="w-full h-full rounded-lg"
                />
            </div>
        </div>
    );
}
