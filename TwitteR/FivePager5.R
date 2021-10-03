library(rjson)
library(jsonlite)
library(ggplot2)
library(dplyr)
library(tidyr)
library(tidytext)
library(lubridate)
library(zoo)
library(RColorBrewer)
library(wordcloud)
library(tm)
library(ROAuth)
library(RCurl)
library(tidyverse)
library(purrr)
library(rtweet)
library(SentimentAnalysis)
library(textdata)


options(stringsAsFactors = FALSE)


sentiments

json_file <- "femitweetsclean2.json"
femi_tweets <- stream_in(file(json_file))


tweet_data <- data.frame(date_time = femi_tweets$created_at,
                         username = femi_tweets$user$screen_name,
                         tweet_text = femi_tweets$text,
                         coords = femi_tweets$coordinates)


# start_date <- as.POSIXct('2020-01-01 00:00:00')
# end_date <- as.POSIXct('2020-12-20 00:00:00')
# 
# 
# femi_tweets_order <- tweet_data %>%
#   mutate(date_time = as.POSIXct(date_time, format = "%a %b %d %H:%M:%S +0000 %Y")) %>%
#   filter(date_time >= start_date & date_time <= end_date ) %>%
#   mutate(tweet_text = gsub("http://*|https://*)", "", tweet_text))
# 
# data("stop_words")
# 

# femi_tweets_clean <- femi_tweets %>%
#   dplyr::select(tweet_text) %>%
#   unnest_tokens(word, tweet_text) %>%
#   anti_join(stop_words) %>%
#   filter(!word %in% c("rt", "t.co"))

data("stop_words")
head(stop_words)
nrow(femi_tweets_clean)
cleaned_tweet_words <- femi_tweets_clean %>%
  anti_join(stop_words)

femi_tweets_clean %>%
  count(word, sort = TRUE) %>%
  top_n(15) %>%
  mutate(word = reorder(word, n)) %>%
  ggplot(aes(x = word, y = n)) +
  geom_col() +
  xlab(NULL) +
  coord_flip() +
  labs(x = "Count",
       y = "Unique words",
       title = "Count of unique words found in tweets")



bing_word_counts <- femi_tweets_clean %>%
  inner_join(get_sentiments("bing")) %>%
  count(word, sentiment, sort = TRUE) %>%
  ungroup()


bing_word_counts %>%
  group_by(sentiment) %>%
  top_n(10) %>%
  ungroup() %>%
  mutate(word = reorder(word, n)) %>%
  ggplot(aes(word, n, fill = sentiment)) +
  geom_col(show.legend = FALSE) +
  facet_wrap(~sentiment, scales = "free_y") +
  labs(title = "Sentiment on feminism tweets.",
       y = "Contribution to sentiment",
       x = NULL) +
  coord_flip()


femi_tweets$stripped_text <- gsub("http.*","",  femi_tweets$text)
femi_tweets$stripped_text <- gsub("https.*","", femi_tweets$stripped_text)

femi_tweets_clean <- femi_tweets %>%
  dplyr::select(stripped_text) %>%
  unnest_tokens(word, stripped_text)


library(widyr)
femi_tweets_paired_words <- femi_tweets %>%
  dplyr::select(stripped_text) %>%
  unnest_tokens(paired_words, stripped_text, token = "ngrams", n = 2)

femi_tweets_paired_words %>%
  count(paired_words, sort = TRUE)

femi_tweets_separated_words <- femi_tweets_paired_words %>%
  separate(paired_words, c("word1", "word2"), sep = " ")

femi_tweets_filtered <- femi_tweets_separated_words %>%
  filter(!word1 %in% stop_words$word) %>%
  filter(!word2 %in% stop_words$word)

femi_words_counts <- femi_tweets_filtered %>%
  count(word1, word2, sort = TRUE)




femi_tweets_2020 <- tweet_data %>%
  mutate(date_time = as.POSIXct(date_time, format = "%a %b %d %H:%M:%S +0000 %Y")) %>%
  mutate(tweet_text = gsub("http://*|https://*)", "", tweet_text),
         month = as.yearmon(date_time))


femi_tweets_clean_2020 <- femi_tweets_2020 %>%
  dplyr::select(tweet_text, month) %>%
  unnest_tokens(word, tweet_text) %>%
  anti_join(stop_words) %>%
  filter(!word %in% c("rt", "t.co"))



femi_tweets_clean_2020 %>%
  count(word, sort = TRUE) %>%
  top_n(15) %>%
  mutate(word = reorder(word, n)) %>%
  ggplot(aes(x = word, y = n)) +
  geom_col() +
  xlab(NULL) +
  coord_flip() +
  labs(x = "Count",
       y = "Unique words",
       title = "Count of unique words found in a year's worth of tweets")


ggplot(pivot[-1,], aes(x = hour, y = sentiment)) + geom_line(group = 1) + geom_point() + 
  theme_minimal() + labs(title = paste0('Average sentiment of tweetings mentioning "',femtweets,'"'),
                         subtitle = paste0(pivot$hour[2],' - ',pivot$hour[nrow(pivot)],' on ', format(sentiment$created_at[1], '%d %B %Y')),
                         x = 'Date', y = 'Sentiment', caption = 'Source: Twitter API')


bing_sentiment_2020 <- femi_tweets_clean_2020 %>%
  inner_join(get_sentiments("bing")) %>%
  count(word, sentiment, month, sort = TRUE) %>%
  group_by(sentiment) %>%
  ungroup() %>%
  mutate(word = reorder(word, n)) %>%
  group_by(month, sentiment) %>%
  top_n(n = 5, wt = n) %>%
  mutate(sent_date = paste0(month, " - ", sentiment)) %>%
  arrange(month, sentiment, n)


bing_sentiment_2020$sent_date <- factor(bing_sentiment_2020$sent_date,
                                        levels = unique(bing_sentiment_2020$sent_date))



bing_sentiment_20 %>%
  ggplot(aes(word, n, fill = sentiment)) +
  geom_col(show.legend = FALSE) +
  facet_wrap(~sent_date, scales = "free_y", ncol = 2) +
  labs(title = "Sentiment during the 2013 flood event by month.",
       y = "Number of Times Word Appeared in Tweets",
       x = NULL) +
  coord_flip()

library(twitteR)
library(tm)
library(wordcloud)
library(RColorBrewer)

# create a corpus
mach_corpus = Corpus(VectorSource(bing_word_counts))

# create document term matrix applying some transformations
tdm = TermDocumentMatrix(mach_corpus,
                         control = list(removePunctuation = TRUE,
                                        stopwords = c("feminism", stopwords("english")),
                                        removeNumbers = TRUE, tolower = TRUE))


m = as.matrix(tdm)
# get word counts in decreasing order
word_freqs = sort(rowSums(m), decreasing=TRUE) 
# create a data frame with words and their frequencies
dm = data.frame(word=names(word_freqs), freq=word_freqs)

# plot wordcloud
wordcloud(dm$word, dm$freq, random.order=FALSE, colors=brewer.pal(8, "Dark2"))

# save the image in png format
png("FeminismCloud.png", width=12, height=8, units="in", res=300)
wordcloud(dm$word, dm$freq, random.order=FALSE, colors=brewer.pal(8, "Dark2"))
dev.off()







