// A component for a list of prices
import React from 'react';

const PriceCard = ({ lessonType, price, description, isRecommended = false }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg w-full">
            {isRecommended && <span className="bg-green-500 text-white px-2 py-1 rounded-full">オススメ</span>}
            <div className="bg-white p-4 rounded-t-lg shadow-md">
              
                <h2 className="text-lg font-bold pt-4">{lessonType}</h2>
                <div className="text-4xl font-bold mt-4">{price}<span className="text-lg font-medium">/月額</span></div>
                <hr className="border-b border-gray-300 my-4"/>
                <p className="text-sm text-gray-500 mt-4">{description}</p>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded-b-lg mt-0">
                <ul className="text-md space-y-2">
                    <li><span className="mr-1 text-green-500 text-lg">📚</span><strong>テキスト代: ￥3,500</strong></li>
                    <li><span className="mr-1 text-blue-500 text-lg">💼</span><strong>入会金: ￥5,000</strong></li>
                </ul>
            </div>
        </div>
    );
};

export const GroupLesson = () => (
    <PriceCard
        lessonType="グループレッスン"
        price="￥13,200"
        isRecommended={true}
        description="月に4回のレッスンで、各レッスンは50分間です。グループレッスンでは、同じレベルの他の学生と一緒に学び、コミュニケーションスキルを向上させることができます。また、ネイティブの講師によるフィードバックとサポートを受けながら、リアルタイムで質問をすることも可能です。"
    />
);

export const PrivateLesson = () => (
    <PriceCard
        lessonType="プライベートレッスン"
        price="22,000"
        description="月に4回のレッスンで、各レッスンは50分間です。プライベートレッスンは各生徒の目標に合わせて、講師が内容をカスタマイズします。特定の語彙や文法の課題を深く学ぶことができ、即時のフィードバックを受け取ることができます。生徒が効果的に英語スキルを高めるのに最適です。"
    />
);

export const DiscussionClass = () => (
    <PriceCard
        lessonType="ディスカッションクラス"
        price="￥13,200"
        description="月に4回のレッスンで、各レッスンは50分間です。フリートーク・クラスは、私達の新しいグループレッスンスタイルの一つで、テキストブックを用いず、ニュースや話題のイベントについて自由にディスカッションを行います。このスタイルは、生徒さんが自然な英語でのコミュニケーションを楽しむようなレッスンです。"
    />
);
