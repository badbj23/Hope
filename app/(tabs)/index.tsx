import "@/global.css"
import {Text, View, Image, FlatList} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';
import {styled} from "nativewind";
import images from "@/constants/images";
import {HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS} from "@/constants/data";
import {icons} from "@/constants/icons";
import {formatCurrency} from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpcomingSubCard from "@/components/UpcomingSubCard";
import SubCard from "@/components/SubCard";
import {useState} from "react";


const SafeAreaView = styled(RNSafeAreaView);

export default function App() {

    const [expandedSubId, setExpandedSubId] = useState<string | null>(null);
    return (
        <SafeAreaView className="flex-1 items-center p-5 bg-background">


                <FlatList ListHeaderComponent={() => (
                    <>

                    <View className="home-header">
                        <View className="home-user">
                            <Image source={images.avatar} className="home-avatar" />
                            <Text className="home-user-name"> {HOME_USER.name}</Text>
                        </View>

                        <Image source={icons.add} className="home-add-icon" />

                    </View>

                    <View className="home-balance-card">
                        <Text className="home-balance-label">Balance</Text>
                        <View className="home-balance-row">
                            <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
                            <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
                        </View>
                    </View>

                    <View><ListHeading title="Upcoming" />
                        <FlatList data={UPCOMING_SUBSCRIPTIONS} renderItem={({item})=>(
                            <UpcomingSubCard {...item} />
                        )}
                                  keyExtractor={(item) => item.id}
                                  horizontal
                                  showsHorizontalScrollIndicator={false}
                                  ListEmptyComponent={<Text className="home-empty-state"> No upcoming renewals</Text> }
                        />
                    </View>
                        <ListHeading title="All Subs" />
                    </>
                )}
                    data={HOME_SUBSCRIPTIONS}
                          keyExtractor={(item) => item.id}
                          renderItem={({item}) => (
                              <SubCard {...item} expanded={expandedSubId === item.id}
                                                 onPress={() => setExpandedSubId((currentId) =>
                                                     (currentId === item.id ? null : item.id))} />

                          )}
                          extraData={expandedSubId}
                          ItemSeparatorComponent={() => <View className="h-4" />}
                          showsVerticalScrollIndicator={true}
                          ListEmptyComponent={<Text className="home-empty-state"> No Subs yet</Text> }
                          contentContainerClassName="pb-30"
                          />



        </SafeAreaView>
    );
}
